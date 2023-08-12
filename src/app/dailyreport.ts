import { Guid } from "guid-typescript"

export class Dailyreport {
    id: string = Guid.create().toString();
    range: number = 0;
    name: string = '';
    email: string = '';
    textarea1: string = '';
    textarea2: string = '';
    textarea3: string = '';
    textarea4: string = '';
    
}
