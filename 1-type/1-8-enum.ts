{
 //Enum 가능한한 사용하지 않는게 좋음

 //JavaScript에는 존재하지 않음
 const MAX_NUM = 6;
 const MAX_STUDENT_PER_CLASS = 10;
 const MONDAY = 0;
 const TUESDAY = 1;
 const WEDNESDAY = 2;
 //freeze 오브젝트가 수정이 안되게
 const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUSEDAY: 1, WEDNESDAY: 2 });
 const dayOfToday = DAYS_ENUM.MONDAY;

 //TypeScript
 enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
 }
 console.log(Days.Tuesday);
 const day = Days.Saturday;
 console.log(day);

 type Dayss = "Mon" | "Tus" | "Wed" | "Thu" | "Fri";
 let dayss: Dayss = "Mon";
 dayss = "Fri";
}
