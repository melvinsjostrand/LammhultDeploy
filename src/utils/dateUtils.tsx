// src/utils/dateUtils.ts
export const getCurrentWeekNumber = (): number => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor(
      (currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)
    );
  
    // Adjust for the day of the week (ISO week starts on Monday)
    const weekNumber = Math.ceil((days + startDate.getDay() + 1) / 7);
  
    return weekNumber;
  };
  