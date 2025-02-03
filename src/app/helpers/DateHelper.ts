export class DateHelper {
  static formatDateToElapsedTime(date: string): string {
    try {
      const parsedDate = new Date(date);
      const now = new Date();
      const durationMs = now.getTime() - parsedDate.getTime();
      const durationMinutes = Math.floor(durationMs / (1000 * 60));
      const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
      const durationDays = Math.floor(durationMs / (1000 * 60 * 60 * 24));
      const durationMonths = Math.floor(durationDays / 30);
      const durationYears = Math.floor(durationDays / 365);

      if (durationMinutes < 59) {
        return `Il y a ${durationMinutes} minute${this.plural(durationMinutes)}`;
      }
      if (durationHours < 23) {
        return `Il y a ${durationHours} heure${this.plural(durationHours)}`;
      }
      if (durationDays < 30) {
        return `Il y a ${durationDays + 1} jour${this.plural(durationDays + 1)}`;
      }
      if (durationDays < 365) {
        return `Il y a environ ${durationMonths} mois`;
      }

      return `Il y a ${durationYears} an${this.plural(durationYears)}`;
    } catch (e) {
      console.error(e);
      return date;
    }
  }

  private static plural(val : number): string {
    return val > 1 ? 's' : '';
  }
}

