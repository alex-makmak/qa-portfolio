"""Prepare supplied portfolio assets without modifying the originals."""
import csv
import argparse
import json
import shutil
from html.parser import HTMLParser
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--source', type=Path, required=True, help='Directory with approved portrait and test-case exports')
SOURCE = parser.parse_args().source.resolve(strict=True)
DOCS = ROOT / 'assets/docs'
DOCS.mkdir(parents=True, exist_ok=True)

class PlainText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []
    def handle_starttag(self, tag, attrs):
        if tag in ('p', 'br', 'li'):
            self.parts.append('\n')
    def handle_data(self, data):
        self.parts.append(data)

def plain(value):
    parser = PlainText()
    parser.feed(value)
    return '\n'.join(line.strip() for line in ''.join(parser.parts).replace('\xa0', ' ').splitlines() if line.strip())

for source, dest in [
    ('Для порфолио/Тест кейсы.csv', 'test-cases.csv'),
    ('Для порфолио/Тест кейсы.xlsx', 'test-cases.xlsx'),
]:
    shutil.copy2(SOURCE / source, DOCS / dest)

portrait = Image.open(SOURCE / 'Для порфолио/06-4-fotor-bg-remover-20260706154524вапвапвап.png')
portrait.thumbnail((1100, 1400), Image.Resampling.LANCZOS)
portrait.save(ROOT / 'assets/portrait.webp', 'WEBP', quality=88)

with (DOCS / 'test-cases.csv').open(encoding='utf-8-sig', newline='') as file:
    rows = list(csv.reader(file))
headers = rows[0]
# TestRail emits two identically named Steps columns; keep both by index.
step_columns = [i for i, name in enumerate(headers) if name == 'Steps']
cases = []
for row in rows[1:]:
    get = lambda name: row[headers.index(name)]
    cases.append(dict(id=get('ID'), title=get('Title'), priority=get('Priority'),
                      section=get('Section'), preconditions=plain(get('Preconditions')),
                      steps=plain('\n'.join(row[i] for i in step_columns if row[i])),
                      expected=plain(get('Steps (Expected Result)'))))
(ROOT / 'content/cases.js').write_text('window.portfolioCases = ' + json.dumps(cases, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
print(f'Prepared {len(cases)} cases and supplied assets.')
