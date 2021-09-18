export interface ConstInterface{
    fulltime: number;
    parttime: number;
    wageperhour: number;
    maxHrsMonth: number;
    maxDaysMonth: number;
    isPartTime: boolean;
    isFullTime: boolean;
};

export const Constants: ConstInterface = {
    fulltime: 8,
    parttime: 4,
    wageperhour: 20,
    maxHrsMonth: 160,
    maxDaysMonth: 20,
    isPartTime: false,
    isFullTime: true
};