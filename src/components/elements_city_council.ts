export default {
  nodes: [
    {
      data: {
        id: '20200505_agenda',
        name: '05/05/2020 City Council Agenda',
        file_name: '20200502_city_council_agenda',
        color: 'blue',
      },
    },
    {
      data: {
        id: '20200505_agenda_attach_01',
        date: '04/23/2020',
        name: 'City Council Special Meeting Minutes',
        file_name: '20200502_city_council_agenda_attachment_01',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_attach_02',
        name: 'Actions of the Zoning Administrator',
        file_name: '20200505_city_council_agenda_attachment_02',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_attach_03',
        name:
          'Accept Public Improvements for Tract 7968, Located at 4171 and 4189 Old Stanley Blvd',
        file_name: '20200505_city_council_agenda_attachment_03',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_attach_04',
        name:
          'Accept Public Improvements by Hendrick Automotive Group, Located at 4345 Rosewood Drive',
        file_name: '20200505_city_council_agenda_attachment_04',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_attach_05',
        name: 'Accept the Monthly Disbursements and Investment Report for March 2020',
        file_name: '20200505_city_council_agenda_attachment_05',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_attach_07',
        name: 'Consider Information and Introduce an Ordnance related to Tobacco',
        file_name: '20200505_city_council_agenda_attachment_07',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_meeting_minutes',
        name: '05/05/2020 City Council Minutes',
        file_name: '20200505_city_council_minutes',
        color: 'purple',
      },
    },
    // Remaining data excluded for brevity
  ],
  edges: [
    {
      data: {
        id: '20200505_agenda_to_attach_01',
        name: 'Attachment 1',
        source: '20200505_agenda',
        target: '20200505_agenda_attach_01',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_to_attach_02',
        name: 'Attachment 2',
        source: '20200505_agenda',
        target: '20200505_agenda_attach_02',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_to_attach_03',
        name: 'Attachment 3',
        source: '20200505_agenda',
        target: '20200505_agenda_attach_03',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_to_attach_04',
        name: 'Attachment 4',
        source: '20200505_agenda',
        target: '20200505_agenda_attach_04',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_to_attach_05',
        name: 'Attachment 5',
        source: '20200505_agenda',
        target: '20200505_agenda_attach_05',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_to_attach_07',
        name: 'Attachment 7',
        source: '20200505_agenda',
        target: '20200505_agenda_attach_07',
        color: '#cde514',
      },
    },
    {
      data: {
        id: '20200505_agenda_to_minutes',
        name: 'Minutes',
        source: '20200505_agenda',
        target: '20200505_meeting_minutes',
        color: 'purple',
      },
    },
  ],
};
