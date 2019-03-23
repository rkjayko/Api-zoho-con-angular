import {Commenter} from '../model/Commenter';

export class HistoryTicket {

  public isPublic: boolean;
  public commenterId: number;
  public content: string;
  public commenter: Commenter;
  public commentedTime: string;


  constructor(
           isPublic = true,
           commenterId = 0,
           content = '',
           ticket = null,
           commentedTime = ''
  ) {}
}
