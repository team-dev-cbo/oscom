// -- PrimeFaces Internationalisation

// ------------------------------------------------------------------------------------------------------------
//										LOCALE
// ------------------------------------------------------------------------------------------------------------
// -- Francais
PrimeFaces.locales['fr'] = {
    closeText: 'Fermer',
    prevText: 'Précédent',
    nextText: 'Suivant',
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
    monthNamesShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc' ],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekHeader: 'Semaine',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix:'',
    timeOnlyTitle: 'Choisir l\'heure',
    timeText: 'Heure',
    hourText: 'Heures',
    minuteText: 'Minutes',
    secondText: 'Secondes',
    currentText: 'Maintenant',
    ampm: false,
    month: 'Mois',
    week: 'Semaine',
    day: 'Jour',
    allDayText: 'Toute la journée'
};

PrimeFaces.locales['fr_FR'] = PrimeFaces.locales['fr'];

// -- Allemand
PrimeFaces.locales['de'] = {
	closeText: 'Schließen',
	prevText: 'Zurück',
	nextText: 'Weiter',
	monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
	monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
	dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
	dayNamesShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
	dayNamesMin: ['S', 'M', 'D', 'M ', 'D', 'F ', 'S'],
	weekHeader: 'Woche',
	FirstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: '',
	timeOnlyTitle: 'Nur Zeit',
	timeText: 'Zeit',
	hourText: 'Stunde',
	minuteText: 'Minute',
	secondText: 'Sekunde',
	currentText: 'Aktuelles Datum',
	ampm: false,
	month: 'Monat',
	week: 'Woche',
	day: 'Tag',
	allDayText: 'Ganzer Tag'
};

PrimeFaces.locales['de_DE'] = PrimeFaces.locales['de'];


// -- Portugal
PrimeFaces.locales['pt'] = {
	closeText: 'Fechar',
	prevText: 'Anterior',
	nextText: 'Próximo',
	currentText: 'Começo',
	monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun', 'Jul','Ago','Set','Out','Nov','Dez'],
	dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
	dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
	dayNamesMin: ['D','S','T','Q','Q','S','S'],
	weekHeader: 'Semana',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: '',
	timeOnlyTitle: 'Só Horas',
	timeText: 'Tempo',
	hourText: 'Hora',
	minuteText: 'Minuto',
	secondText: 'Segundo',
	ampm: false,
	month: 'Mês',
	week: 'Semana',
	day: 'Dia',
	allDayText : 'Todo o Dia'
};


// -- Americain
PrimeFaces.locales ['en_US'] = {
    closeText: 'Close',
    prevText: 'Previous',
    nextText: 'Next',
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Tue', 'Fri', 'Sat'],
    dayNamesMin: ['S', 'M', 'T', 'W ', 'T', 'F ', 'S'],
    weekHeader: 'Week',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix:'',
    timeOnlyTitle: 'Only Time',
    timeText: 'Time',
    hourText: 'Time',
    minuteText: 'Minute',
    secondText: 'Second',
    currentText: 'Current Date',
    ampm: false,
    month: 'Month',
    week: 'week',
    day: 'Day',
    allDayText: 'All Day',
    messages: {
        'javax.faces.component.UIInput.REQUIRED': '{0}: Validation Error: Value is required.',
        'javax.faces.converter.IntegerConverter.INTEGER': '{2}: \'{0}\' must be a number consisting of one or more digits.',
        'javax.faces.converter.IntegerConverter.INTEGER_detail': '{2}: \'{0}\' must be a number between -2147483648 and 2147483647 Example: {1}',
        'javax.faces.converter.DoubleConverter.DOUBLE': '{2}: \'{0}\' must be a number consisting of one or more digits.',
        'javax.faces.converter.DoubleConverter.DOUBLE_detail': '{2}: \'{0}\' must be a number between 4.9E-324 and 1.7976931348623157E308  Example: {1}',
        'javax.faces.converter.BigDecimalConverter.DECIMAL': '{2}: \'{0}\' must be a signed decimal number.',
        'javax.faces.converter.BigDecimalConverter.DECIMAL_detail': '{2}: \'{0}\' must be a signed decimal number consisting of zero or more digits, that may be followed by a decimal point and fraction.  Example: {1}',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER': '{2}: \'{0}\' must be a number consisting of one or more digits.',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail': '{2}: \'{0}\' must be a number consisting of one or more digits. Example: {1}',
        'javax.faces.converter.ByteConverter.BYTE': '{2}: \'{0}\' must be a number between 0 and 255.',
        'javax.faces.converter.ByteConverter.BYTE_detail': '{2}: \'{0}\' must be a number between 0 and 255.  Example: {1}',
        'javax.faces.converter.CharacterConverter.CHARACTER': '{1}: \'{0}\' must be a valid character.',
        'javax.faces.converter.CharacterConverter.CHARACTER_detail': '{1}: \'{0}\' must be a valid ASCII character.',
        'javax.faces.converter.ShortConverter.SHORT': '{2}: \'{0}\' must be a number consisting of one or more digits.',
        'javax.faces.converter.ShortConverter.SHORT_detail': '{2}: \'{0}\' must be a number between -32768 and 32767 Example: {1}',
        'javax.faces.converter.BooleanConverter.BOOLEAN': '{1}: \'{0}\' must be \'true\' or \'false\'',
        'javax.faces.converter.BooleanConverter.BOOLEAN_detail': '{1}: \'{0}\' must be \'true\' or \'false\'.  Any value other than \'true\' will evaluate to \'false\'.',
        'javax.faces.validator.LongRangeValidator.MAXIMUM': '{1}: Validation Error: Value is greater than allowable maximum of \'{0}\'',
        'javax.faces.validator.LongRangeValidator.MINIMUM': '{1}: Validation Error: Value is less than allowable minimum of \'{0}\'',
        'javax.faces.validator.LongRangeValidator.NOT_IN_RANGE': '{2}: Validation Error: Specified attribute is not between the expected values of {0} and {1}.',
        'javax.faces.validator.LongRangeValidator.TYPE={0}': 'Validation Error: Value is not of the correct type.',
        'javax.faces.validator.DoubleRangeValidator.MAXIMUM': '{1}: Validation Error: Value is greater than allowable maximum of \'{0}\'',
        'javax.faces.validator.DoubleRangeValidator.MINIMUM': '{1}: Validation Error: Value is less than allowable minimum of \'{0}\'',
        'javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE': '{2}: Validation Error: Specified attribute is not between the expected values of {0} and {1}',
        'javax.faces.validator.DoubleRangeValidator.TYPE={0}': 'Validation Error: Value is not of the correct type',
        'javax.faces.converter.FloatConverter.FLOAT': '{2}: \'{0}\' must be a number consisting of one or more digits.',
        'javax.faces.converter.FloatConverter.FLOAT_detail': '{2}: \'{0}\' must be a number between 1.4E-45 and 3.4028235E38  Example: {1}',
        'javax.faces.converter.DateTimeConverter.DATE': '{2}: \'{0}\' could not be understood as a date.',
        'javax.faces.converter.DateTimeConverter.DATE_detail': '{2}: \'{0}\' could not be understood as a date. Example: {1}',
        'javax.faces.converter.DateTimeConverter.TIME': '{2}: \'{0}\' could not be understood as a time.',
        'javax.faces.converter.DateTimeConverter.TIME_detail': '{2}: \'{0}\' could not be understood as a time. Example: {1}',
        'javax.faces.converter.DateTimeConverter.DATETIME': '{2}: \'{0}\' could not be understood as a date and time.',
        'javax.faces.converter.DateTimeConverter.DATETIME_detail': '{2}: \'{0}\' could not be understood as a date and time. Example: {1}',
        'javax.faces.converter.DateTimeConverter.PATTERN_TYPE': '{1}: A \'pattern\' or \'type\' attribute must be specified to convert the value \'{0}\'', 
        'javax.faces.converter.NumberConverter.CURRENCY': '{2}: \'{0}\' could not be understood as a currency value.',
        'javax.faces.converter.NumberConverter.CURRENCY_detail': '{2}: \'{0}\' could not be understood as a currency value. Example: {1}',
        'javax.faces.converter.NumberConverter.PERCENT': '{2}: \'{0}\' could not be understood as a percentage.',
        'javax.faces.converter.NumberConverter.PERCENT_detail': '{2}: \'{0}\' could not be understood as a percentage. Example: {1}',
        'javax.faces.converter.NumberConverter.NUMBER': '{2}: \'{0}\' could not be understood as a date.',
        'javax.faces.converter.NumberConverter.NUMBER_detail': '{2}: \'{0}\' is not a number. Example: {1}',
        'javax.faces.converter.NumberConverter.PATTERN': '{2}: \'{0}\' is not a number pattern.',
        'javax.faces.converter.NumberConverter.PATTERN_detail': '{2}: \'{0}\' is not a number pattern. Example: {1}',
        'javax.faces.validator.LengthValidator.MINIMUM': '{1}: Validation Error: Length is less than allowable minimum of \'{0}\'',
        'javax.faces.validator.LengthValidator.MAXIMUM': '{1}: Validation Error: Length is greater than allowable maximum of \'{0}\'',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET': 'Regex pattern must be set.',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail': 'Regex pattern must be set to non-empty value.',
        'javax.faces.validator.RegexValidator.NOT_MATCHED': 'Regex Pattern not matched',
        'javax.faces.validator.RegexValidator.NOT_MATCHED_detail': 'Regex pattern of \'{0}\' not matched',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION': 'Error in regular expression.',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail': 'Error in regular expression, \'{0}\''
    }
};

// -- Italien
PrimeFaces.locales ['it'] = {
	closeText: 'Chiudi',
	prevText: 'Precedente',
	nextText: 'Prossimo',
	monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre' ],
	monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic' ],
	dayNames: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
	dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
	dayNamesMin: ['D', 'L', 'M', 'M ', 'G', 'V ', 'S'],
	weekHeader: 'Sett',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix:'',
	timeOnlyTitle: 'Solo Tempo',
	timeText: 'Ora',
	hourText: 'Ore',
	minuteText: 'Minuto',
	secondText: 'Secondo',
	currentText: 'Data Odierna',
	ampm: false,
	month: 'Mese',
	week: 'Settimana',
	day: 'Giorno',
	allDayText: 'Tutto il Giorno'
};

// -- Espagne
PrimeFaces.locales['es'] = {
	closeText: 'Cerrar',
	prevText: 'Anterior',
	nextText: 'Siguiente',
	monthNames: ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
	dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
	dayNamesShort: ['Dom','Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
	dayNamesMin: ['D','L','M','X','J','V','S'],
	weekHeader: 'Semana',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: '',
	timeOnlyTitle: 'Sólo hora',
	timeText: 'Tiempo',
	hourText: 'Hora',
	minuteText: 'Minuto',
	secondText: 'Segundo',
	currentText: 'Fecha actual',
	ampm: false,
	month: 'Mes',
	week: 'Semana',
	day: 'Día',
	allDayText : 'Todo el día'
};

PrimeFaces.locales['es_ES'] = PrimeFaces.locales['es'];


// Chinois
PrimeFaces.locales['zh_CN'] = {
	closeText: '关闭',
	prevText: '上个月',
	nextText: '下个月',
	currentText: '今天',
	monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
	monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
	dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
	dayNamesShort: ['日','一','二','三','四','五','六'],
	dayNamesMin: ['日','一','二','三','四','五','六'],
	weekHeader: '周',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '', // 年
	timeOnlyTitle: '仅时间',
	timeText: '时间',
	hourText: '时',
	minuteText: '分',
	secondText: '秒',
	ampm: false,
	month: '月',
	week: '周',
	day: '日',
	allDayText : '全天'
};


PrimeFaces.locales['zh_TW'] = {
    closeText: '關閉',
    prevText: '上個月',
    nextText: '下個月',
    currentText: '今天',
    monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
    dayNamesShort: ['日','一','二','三','四','五','六'],
    dayNamesMin: ['日','一','二','三','四','五','六'],
    weekHeader: '周',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '', // 年
    timeOnlyTitle: '僅時間',
    timeText: '時間',
    hourText: '時',
    minuteText: '分',
    secondText: '秒',
    ampm: false,
    month: '月',
    week: '周',
    day: '日',
    allDayText : '全天'
};


// -- Turquie
PrimeFaces.locales['tr'] = {
	closeText: 'kapat',
	prevText: 'geri',
	nextText: 'ileri',
	currentText: 'bugün',
	monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
	monthNamesShort: ['Oca','Şub','Mar','Nis','May','Haz', 'Tem','Ağu','Eyl','Eki','Kas','Ara'],
	dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
	dayNamesShort: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
	dayNamesMin: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
	weekHeader: 'Hf',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: '',
	timeOnlyTitle: 'Zaman Seçiniz',
	timeText: 'Zaman',
	hourText: 'Saat',
	minuteText: 'Dakika',
	secondText: 'Saniye',
	ampm: false,
	month: 'Ay',
	week: 'Hafta',
	day: 'Gün',
	allDayText : 'Tüm Gün'
};

// -- Grec
PrimeFaces.locales['el'] = {
	closeText: 'Κλείσιμο',
	prevText: 'Προηγούμενο',
	nextText: 'Επόμενο',
	monthNames: ['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάϊος','Ιούνιος','Ιούλιος','Άυγουστος','Σεπτέμβιος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'],
	monthNamesShort: ['Ιαν','Φεβ','Μαρ','Απρ','Μαι','Ιουν', 'Ιουλ','Αυγ','Σεπ','Οκτ','Νοε','Δεκ'],
	dayNames: ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο'],
	dayNamesShort: ['Κυρ','Δευ','Τρι','Τετ','Πεμ','Παρ','Σαβ'],
	dayNamesMin: ['Κ','Δ','Τρ','Τε','Πε','Πα','Σ'],
	weekHeader: 'Εβδ',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: '',
	timeOnlyTitle: 'Επιλογή Ώρας',
	timeText: 'Χρόνος',
	hourText: 'Ώρα',
	minuteText: 'Λεπτό',
	secondText: 'Δεύτερολεπτο',
	currentText: 'Τώρα',
	ampm: false,
	month: 'Μήνας',
	week: 'Εβδομάδα',
	day: 'Μέρα',
	allDayText : 'Όλη Μέρα'
};

// -- Roumain
PrimeFaces.locales ['ro'] = {
	closeText: 'Închide',
	prevText: 'Înapoi',
	nextText: 'Înainte',
	currentText: 'Acasă',
	monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie' ],
	monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec' ],
	dayNames: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
	dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
	dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
	weekHeader: 'Săptămâna',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: '',
	timeOnlyTitle: 'Numai timp',
	timeText: 'Timp',
	hourText: 'Ora',
	minuteText: 'Minut',
	secondText: 'Secunde',
	ampm: false,
	month: 'Luna',
	week: 'Săptămâna',
	day: 'Zi',
	allDayText: 'Toată ziua'
};


// -- Russie
PrimeFaces.locales ['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Назад',
    nextText: 'Вперёд',
    monthNames: ['Январь', 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь','Октябрь','Ноябрь','Декабрь' ],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота'],
    dayNamesShort: ['Воск','Пон' , 'Вт' , 'Ср' , 'Четв' , 'Пят' , 'Суб'],
    dayNamesMin: ['В', 'П', 'Вт', 'С ', 'Ч', 'П ', 'Сб'],
    weekHeader: 'Неделя',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix:'',
    timeOnlyTitle: 'Только время',
    timeText: 'Время',
    hourText: 'Час',
    minuteText: 'Минута',
    secondText: 'Секунда',
    currentText: 'Сегодня',
    ampm: false,
    month: 'Месяц',
    week: 'неделя',
    day: 'День',
    allDayText: 'Весь день'
};


// -- Arabe
PrimeFaces.locales ['ar'] = {
	closeText: 'إغلق',
	prevText: 'إلى الخلف',
	nextText: 'إلى الأمام',
	currentText: 'بداية',
	monthNames: ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير' ],
	monthNamesShort: ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير' ],
	dayNames: ['يوم الأحد‎', 'يوم الإثنين‎', 'يوم الثلاثاء‎', '‏يوم الأَرْبعاء‎', '‏يوم الخَمِيس‎', 'يوم الجُمْعَة‎‎', 'يوم السَّبْت'],
	dayNamesShort: ['الأحد‎', 'الإثنين‎', 'الثلاثاء‎', 'الأَرْبعاء‎', 'الخَمِيس‎', 'الجُمْعَة‎‎', 'السَّبْت'],
	dayNamesMin: ['الأحد‎', 'الإثنين‎', 'الثلاثاء‎', 'الأَرْبعاء‎', 'الخَمِيس‎', 'الجُمْعَة‎‎', 'السَّبْت'],
	weekHeader: 'الأسبوع',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix:'' ,
	timeOnlyTitle: 'الوقت فقط' ,
	timeText: 'الوقت' ,
	hourText: 'ساعة',
	minuteText: 'دقيقة',
	secondText: 'ثانية',
	ampm: false,
	month: 'الشهر',
	week: 'الأسبوع',
	day: 'اليوم',
	allDayText: 'سا ئراليوم'
};

// -- Vietnam
PrimeFaces.locales['vi'] = {
	closeText: 'Tắt',
	prevText: 'Tháng trước',
	nextText: 'Tháng sau',
	monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
	monthNamesShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12' ],
	dayNames: ['Chúa Nhựt', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
	dayNamesShort: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy'],
	dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
	weekHeader: 'Tuần',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix:'',
	timeOnlyTitle: 'Chọn giờ',
	timeText: 'Giờ',
	hourText: 'Giờ',
	minuteText: 'Phút',
	secondText: 'Giây',
	currentText: 'Giờ hiện hành',
	ampm: false,
	month: 'Tháng',
	week: 'Tuần',
	day: 'Ngày',
	allDayText: 'Cả ngày'
};

// -- Hebreux
PrimeFaces.locales ['he'] = {
	closeText: 'סגור',
	prevText: 'הקודם',
	nextText: 'הבא',
	monthNames: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני', 'יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
	monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
	dayNames: ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'],
	dayNamesShort: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
	dayNamesMin: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
	weekHeader: 'שבוע',
	firstDay: 0,
	isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: '',
	timeOnlyTitle: 'זמן בלבד',
	timeText: 'זמן',
	hourText: 'שעה',
	minuteText: 'דקה',
	secondText: 'שניה',
	currentText: 'היום',
	ampm: false,
	month: 'חודש',
	week: 'שבוע',
	day: 'יום',
	allDayText: 'כל היום'
};


// -- Serbie
PrimeFaces.locales ['sr'] = {
	 closeText: 'Zatvori',
	 prevText: 'Nazad',
	 nextText: 'Napred',
	 monthNames: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Juni', 'Juli', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar' ],
	 monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec' ],
	 dayNames: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'],
	 dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],
	 dayNamesMin: ['N', 'P', 'U', 'S ', 'Č', 'P ', 'S'],
	 weekHeader: 'Sedmica',
	 firstDay: 1,
	 isRTL: false,
	 showMonthAfterYear: false,
	 yearSuffix:'',
	 timeOnlyTitle: 'Samo Vreme',
	 timeText: 'Vreme',
	 hourText: 'Sat',
	 minuteText: 'Minuta',
	 secondText: 'Sekunda',
	 currentText: 'Danas',
	 ampm: false,
	 month: 'Mesec',
	 week: 'sedmica',
	 day: 'Dan',
	 allDayText: 'Celi Dan'
};


// -- Slovaquie
PrimeFaces.locales ['sl'] = {
	closeText: 'Zapri',
	prevText: 'Nazaj',
	nextText: 'Naprej',
	monthNames : ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'],
	monthNamesShort : ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
	dayNames : ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', '\u010Cetrtek', 'Petek', 'Sobota'],
	dayNamesShort : ['Ned', 'Pon', 'Tor', 'Sre', '\u010Cet', 'Pet', 'Sob'],
	dayNamesMin: ['N', 'P', 'T', 'S', '\u010C', 'P ', 'S'],
	weekHeader: 'Teden',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix:'',
	timeOnlyTitle: 'Samo \u010Das',
	timeText: '\u010Cas',
	hourText: '\u010Cas',
	minuteText: 'Minute',
	secondText: 'Sekunde',
	currentText: 'danes',
	ampm: false,
	month: 'mesec',
	week: 'teden',
	day: 'dan',
	allDayText: 'Cel dan'
};


// ------------------------------------------------------------------------------------------------------------
//										TIMEPICKER et TIMELINE
// ------------------------------------------------------------------------------------------------------------

// -- Francais
PrimeFacesExt.locales.TimePicker['fr'] = {
    hourText: 'Heures',
    minuteText: 'Minutes',
    amPmText: ['AM', 'PM'],
    closeButtonText: 'Fermer',
    nowButtonText: 'Maintenant',
    deselectButtonText: 'Désélectionner'
};

PrimeFacesExt.locales.Timeline['fr'] = {
    'MONTHS': ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    'MONTHS_SHORT': ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
    'DAYS': ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    'DAYS_SHORT': ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    'ZOOM_IN': "Zoomer",
    'ZOOM_OUT': "Dézoomer",
    'MOVE_LEFT': "Déplacer à gauche",
    'MOVE_RIGHT': "Déplacer à droite",
    'NEW': "Nouveau",
    'CREATE_NEW_EVENT': "Créer un nouvel événement"
};


//PrimeFacesExt.locales.TimePicker['fr_fr'] = PrimeFacesExt.locales.TimePicker['fr'];
PrimeFacesExt.locales.TimePicker['fr_FR'] = PrimeFacesExt.locales.TimePicker['fr'];


