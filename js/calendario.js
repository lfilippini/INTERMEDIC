document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        locale: 'es',
        events: [
            {
                title: 'Varicela',
                start: '2020-11-01',
                end: '2020-11-07'
            },

            {
                title: 'Sarampion',
                start: '2020-11-13',
                end: '2020-11-20'
            },

            {
                title: 'Dengue',
                start: '2020-11-18',
            },
            {
                title: 'Neumonia',
                start: '2020-12-01',
                end: '2020-12-11',
            },
            {
                title: 'Neumonia',
                start: '2021-02-02',
                end: '2021-02-28'
            },
            {
                title: 'Dengue',
                start: '2021-01-15',
            },
            {
                title: 'Covid-19',
                start: '2021-03-15',
            }
        ]
    });

    calendar.render();
});