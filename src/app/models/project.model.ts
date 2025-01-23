import { Tags } from "./tags.model";

export interface Project {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    active: boolean;
    tags: Tags[];
}