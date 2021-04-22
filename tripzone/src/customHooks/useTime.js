import { useEffect, useState } from "react";
import TimeZoneService from "../services/TimeZoneService";
import DateFormat from "../utils/DateFormat";

function useTime() {
  const [estTime, setestTime] = useState(null);
  const [istTime, setistTime] = useState(null);

  useEffect(() => {
    getIstTime();
    getEstTime();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getIstTime();
      getEstTime();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, [estTime, istTime]);

  const getEstTime = async () => {
    let response = await TimeZoneService.getWorldClocks();
    let dateTimeEST = new Date(response.currentDateTime);
    dateTimeEST.setTime(
      dateTimeEST.getTime() + dateTimeEST.getTimezoneOffset() * 60 * 1000
    );
    let ESTdate = DateFormat.getDate(dateTimeEST) + " - EST";
    let ESTTime = DateFormat.getTime(dateTimeEST);
    setestTime({
      date: ESTdate,
      time: ESTTime,
    });
  };

  const getIstTime = () => {
    let ISTdate = DateFormat.getDate(new Date()) + " - IST";
    let ISTTime = DateFormat.getTime(new Date());
    setistTime({
      date: ISTdate,
      time: ISTTime,
    });
  };
  return [estTime, istTime];
}

export default useTime;
