export interface Ipassenger {
    [x: string]: any;
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: null | {
        name: string;
        age: number;
    }[];
}
