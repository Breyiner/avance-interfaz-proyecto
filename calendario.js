document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendario')
  const calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'es',
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día'
    },
    selectable: true,
    select: function(info) {
      const titulo = prompt('Título del evento:')
      if (titulo) {
        calendar.addEvent({
          title: titulo,
          start: info.startStr,
          end: info.endStr,
          allDay: info.allDay
        });
      }
    },
    events: [
      {
        title: 'Reunión',
        start: '2025-07-15'
      }
    ]
  })
  calendar.render();

  calendar.addEvent({
    title: 'Nuevo evento',
    start: '2025-07-20',
    allDay: true // puede ser false si tiene hora
  });
})