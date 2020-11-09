import { Skill } from './skill.model';

export class Developer {
  public lastName: string;
  public firstName: string;
  public age: number;
  public sex: string;
  public bio: string;
  public skills: Skill[];
}
