class DateFormat {
  static getDate(date) {
    let dt = new Date(date);
    return dt.toLocaleString("default", {
      month: "short",
      day: "2-digit",
      year: "2-digit",
    });
  }
  static getTime(time) {
    let dt = new Date(time);
    return dt.toLocaleString("default", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  static getDayMonth(date) {
    let dt = new Date(date);
    return dt.toLocaleString("default", {
      month: "short",
      year: "none",
    });
  }
}
export default DateFormat;
