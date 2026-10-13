window.portfolioCases = [
  {
    "id": "C389",
    "title": "Проверка Empty State таблицы после очистки выбранной биржи",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nВ селекторе Exchanges выбрана любая биржа (в селекторе отображается Exchanges selected: 1).",
    "steps": "1. В блоке Trades list найти селектор Exchanges и нажать крестик (X) справа (очистить выбор биржи).\n2. Проверить таблицу Trades list",
    "expected": ""
  },
  {
    "id": "C390",
    "title": "Загрузка списка сделок после выбора биржи",
    "priority": "High",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nКонтекст: выбран период Week (или другой, покрывающий сделки)\nДанные: есть ≥1 сделка (выполнены подготовительные кейсы  C179 или/и  C182",
    "steps": "1. В блоке Trades list убедиться, что выбраны Exchanges = биржа со сделкой (Exchanges selected: 1) и выбран нужный тип рынка Spot/Futures (в зависимости от созданной сделки).\n2. Если биржа не выбранна то выбрать нужную\n3. Проверить, что в таблице отображается минимум 1 строка сделки.",
    "expected": ""
  },
  {
    "id": "C394",
    "title": "Валидация состава и отображения столбцов таблицы сделок",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nКонтекст: выбрана биржа с открытой сделкой",
    "steps": "1. В таблице Trades list проверить наличие заголовков колонок.",
    "expected": ""
  },
  {
    "id": "C395",
    "title": "Обновление значений виджетов после выбора биржи",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nКонтекст: биржа не выбранна",
    "steps": "1. Зафиксировать текущие значения карточек (например Win rate  и Trades)\n2. В Trades list в выподающем списке выбрать биржу (чтобы стало Exchanges selected: 1)\n3. Дождаться обновления данных",
    "expected": ""
  },
  {
    "id": "C396",
    "title": "Обновление данных при нажатии кнопки Refresh",
    "priority": "Low",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary",
    "steps": "1. Нажать иконку Refresh рядом с заголовком Trading diary (круговая стрелка)\n2. Дождаться завершения обновления (исчезновение лоадера/перерисовка таблицы)",
    "expected": ""
  },
  {
    "id": "C397",
    "title": "Фильтрация сделок по периоду  (неделя/ месяц/ 3 месяца)",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary",
    "steps": "1. В фильте перелючающем периоды нажать Week\n2. Убедиться, что активен период Week (кнопка подсвечена)\n3. Нажать Month Убедиться, что активен период Month\n4. Нажать 3 month\n5. Убедиться, что активен период 3 month",
    "expected": ""
  },
  {
    "id": "C400",
    "title": "Фильтрация сделок по произвольному диапазону дат",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary",
    "steps": "1. Нажать на контрол Dates (рядом с периодами), чтобы открыть календарь.\n2. Выбрать диапазон дат (from → to).\n3. Ддождаться применения по UI",
    "expected": ""
  },
  {
    "id": "C566",
    "title": "Сброс диапазона дат по крестику",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary",
    "steps": "1. Убедиться, что в поле Dates отображается выбранный диапазон и виден крестик (X)\n2. Нажать крестик (X) в поле Dates\n3. Убедиться, что поле Dates отображает плейсхолдер Select date",
    "expected": ""
  },
  {
    "id": "C401",
    "title": "Фильтрация сделок по одиночной дате",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary",
    "steps": "1. Нажать на контрол Dates, чтобы открыть календарь\n2. Выбрать одну дату\n3. Кликнуть по выбранной дате дважды",
    "expected": ""
  },
  {
    "id": "C403",
    "title": "Фильтрация таблицы по типу рынка (Spot / Futures)",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nДанные: есть ≥1 сделка (выполнены подготовительные кейсы C179 или C182",
    "steps": "1. Нажать переключатель Spot.\n2. Дождаться обновления таблицы.\n3. Нажать переключатель Futures.\n4. Дождаться обновления таблицы.",
    "expected": ""
  },
  {
    "id": "C405",
    "title": "Фильтрация таблицы по направлению (Direction: Long/Short)",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nДанные: есть ≥1 сделка (выполнены подготовительные кейсы C179 или C182",
    "steps": "1. Нажать направление Sell\n2. Дождаться обновления таблицы\n3. Нажать направление Buy\n4. Дождаться обновления таблицы",
    "expected": ""
  },
  {
    "id": "C406",
    "title": "Отображение текущей валюты и списка доступных валют",
    "priority": "Low",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nДанные: есть ≥1 сделка (выполнены подготовительные кейсы C179 или C182",
    "steps": "1. Найти выпадающий список Currency (рядом с фильтрами)\n2. Проверить, что в контроле отображается текущее значение USDC\n3. Открыть выпадающий список Currency\n4. Проверить, что в списке отображается значение USDC и оно отмечено как выбранное (галочка/active)",
    "expected": ""
  },
  {
    "id": "C407",
    "title": "Поиск сделки по названию торговой пары",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nДанные: есть ≥1 сделка (выполнены подготовительные кейсы C179 или C182",
    "steps": "1. В блоке Trades list выбрать биржу и тип рынка  в которых есть сделка\n2. В поле Search by pair ввести \"vvvv\"\n3. Проверить, что таблица показывает 0 строк / отображается No results / empty state\n4. Очистить поле Search by pair\n5. Ввести \"btc\"\n6. Проверить, что в таблице снова отображаются строки, и все видимые строки соответствуют поиску",
    "expected": ""
  },
  {
    "id": "C408",
    "title": "Экспорт истории сделок в файл .xlsx",
    "priority": "High",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary",
    "steps": "1. Нажать кнопку/иконку Export (иконка скачивания в правом верхнем углу блока таблицы).",
    "expected": ""
  },
  {
    "id": "C410",
    "title": "Открытие модального окна «Поделиться» (Share Trade)",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nДанные: есть ≥1 сделка (выполнены подготовительные кейсы C179 или C182",
    "steps": "1. В блоке Trades list выбрать биржу и тип рынка  в которых есть сделка\n2. В строке сделки нажать иконку Share (справа в строке)",
    "expected": ""
  },
  {
    "id": "C414",
    "title": "Отображение QR-кода и реферального кода в окне Share",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nКонтекст: модалка Share открыта\nДанные: выполнен кейс C410",
    "steps": "1. В модальном окне найти блок с QR-кодом.\n2.  Найти текстовое поле с реферальным кодом",
    "expected": ""
  },
  {
    "id": "C411",
    "title": "Скачивание изображения сделки (PNG) через Share",
    "priority": "Medium",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary ;\nКонтекст: модалка Share открыта\nДанные: выполнен кейс C410",
    "steps": "1. В модальном окне нажать Download",
    "expected": ""
  },
  {
    "id": "C412",
    "title": "Переход в Telegram через модальное окно Share",
    "priority": "Low",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nКонтекст: модалка Share открыта\nДанные: выполнен кейс C410",
    "steps": "1. В модальном окне нажать \"гиперссылка: Telegram\"",
    "expected": ""
  },
  {
    "id": "C413",
    "title": "Переход в X (Twitter) через модальное окно Share",
    "priority": "Low",
    "section": "Торговый дневник",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-diary\nКонтекст: модалка Share открыта\nДанные: выполнен кейс C410",
    "steps": "1. В модальном окне нажать \"гиперссылка: X (Twitter)\"",
    "expected": ""
  },
  {
    "id": "C179",
    "title": "Создание новой сделки Spot (для данных дневника)",
    "priority": "Medium",
    "section": "Подготовительные кейсы для дневника",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-terminal\nКонтекст: Exchange account выбран S(spot), Market выбран USDC,  Trading Pair выбрана BTC\\USDC",
    "steps": "1. Выбрать Buy.\n2. Открыть вкладку Limit.\n3. Ввести Order price = 50000 (или актуальную рыночную цену).\n5. Ввести Total = 10\n6. Нажать кнопку Create trade\n7. Нажать кнопку Confirm",
    "expected": ""
  },
  {
    "id": "C182",
    "title": "Создание новой сделки Futures (для данных дневника)",
    "priority": "Medium",
    "section": "Подготовительные кейсы для дневника",
    "preconditions": "Пользователь: залогинен (демо-аккаунт)\nСтраница: https://test.skyrexio.com/manual-trading/trading-terminal\nКонтекст: Exchange account выбран F (futures), Market выбран USDC, Trading Pair выбрана BTC/USDC, Skip base order выключен",
    "steps": "1. Выбрать Long\n2. Выбрать Isolated\n3. Установить Leverage = 5\n4. Открыть вкладку Limit\n5. Ввести Order price = 50000\n6. Ввести Total = 110\n7. Проскролить ниже\n8. Нажать кнопку Create trade\n9. Нажать кнопку Confirm",
    "expected": ""
  }
];
