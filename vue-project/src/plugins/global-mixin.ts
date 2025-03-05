export const dateFormatter = {
  methods: {
    formatPublishedDate(dateStr: string): string {
      const date = new Date(dateStr)
      return new Intl.DateTimeFormat('id-ID', {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date)
    },
  },
}
