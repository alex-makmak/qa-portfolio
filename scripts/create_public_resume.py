"""Generate the reviewed, public-safe resume from structured portfolio content."""
import json
import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle, KeepTogether
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'content/resume.json').read_text(encoding='utf-8'))
font_dir = Path('C:/Windows/Fonts')
pdfmetrics.registerFont(TTFont('Portfolio', str(font_dir / 'arial.ttf')))
pdfmetrics.registerFont(TTFont('PortfolioBold', str(font_dir / 'arialbd.ttf')))
pdfmetrics.registerFontFamily('Portfolio', normal='Portfolio', bold='PortfolioBold')
ink, blue, muted = map(colors.HexColor, ['#202328', '#244de2', '#626872'])
styles = {
    'name': ParagraphStyle('name', fontName='PortfolioBold', fontSize=27, leading=31, textColor=ink, spaceAfter=6),
    'role': ParagraphStyle('role', fontName='Portfolio', fontSize=11, leading=15, textColor=blue, spaceAfter=8),
    'contact': ParagraphStyle('contact', fontName='Portfolio', fontSize=9, leading=14, textColor=muted),
    'section': ParagraphStyle('section', fontName='PortfolioBold', fontSize=11, leading=15, textColor=blue, spaceBefore=15, spaceAfter=7),
    'body': ParagraphStyle('body', fontName='Portfolio', fontSize=9.5, leading=13.5, textColor=ink, spaceAfter=4),
    'small': ParagraphStyle('small', fontName='Portfolio', fontSize=8.5, leading=12, textColor=muted, spaceAfter=5),
    'job': ParagraphStyle('job', fontName='PortfolioBold', fontSize=10.5, leading=14, textColor=ink, spaceAfter=3),
}
def p(text, style='body'):
    return Paragraph(text, styles[style])
def heading(text):
    return p(escape(text), 'section')
story = [p(escape(data['name']), 'name'), p(escape(data['role']), 'role'),
         p(escape(data['location']), 'contact'),
         p(f'<link href="mailto:{data["email"]}" color="#244de2">{data["email"]}</link>  |  <link href="https://t.me/{data["telegram"]}" color="#244de2">@{data["telegram"]}</link>  |  <link href="{data["portfolio"]}" color="#244de2">Портфолио</link>', 'contact'),
         Spacer(1, 12), HRFlowable(width='100%', thickness=1, color=colors.HexColor('#d9dde3')),
         Spacer(1, 10), p(escape(data['summary'])), heading('КЛЮЧЕВЫЕ НАВЫКИ')]
for label, value in data['skills']:
    story.append(p(f'<b>{escape(label)}:</b> {escape(value)}'))
story.append(heading('ОПЫТ'))
for job in data['experience']:
    story.extend([KeepTogether([p(escape(job['company']), 'job'),
                  p(escape(job['position']+' | '+job['dates']), 'small')])])
    for point in job['points']:
        story.append(p('- '+escape(point)))
    story.append(Spacer(1, 5))
story.append(heading('ПРОЕКТНАЯ И УЧЕБНАЯ ПРАКТИКА'))
story.extend(p('- '+escape(point)) for point in data['practice'])
story.append(heading('ОБРАЗОВАНИЕ'))
story.extend(p(escape(point)) for point in data['education'])
output = ROOT / 'output/pdf/Alexander_Makmak_QA.pdf'
output.parent.mkdir(parents=True, exist_ok=True)
def footer(canvas, doc):
    canvas.setFont('Portfolio', 8)
    canvas.setFillColor(muted)
    canvas.drawString(38, 26, 'Александр Макмак | QA Engineer')
    canvas.drawRightString(A4[0]-38, 26, 'Октябрь 2026')
document = SimpleDocTemplate(str(output), pagesize=A4, topMargin=32, bottomMargin=39,
                            leftMargin=38, rightMargin=38, title='Александр Макмак | QA Engineer',
                            author='Александр Макмак')
document.build(story, onFirstPage=footer, onLaterPages=footer)
shutil.copy2(output, ROOT / 'assets/docs/resume.pdf')
print(output)
