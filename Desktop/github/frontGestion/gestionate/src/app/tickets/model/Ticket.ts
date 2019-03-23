export class Ticket {

  public subCategory: string;
  public contactId: string;
  public subject: string;
  public dueDate: string;
  public departmentId: string;
  public description: string;
  public classification: string;
  public assigneeId: string;
  public email: string;
  public status: string;

  constructor(
    subCategory = '',
    contactId = '',
    subject = '',
    dueDate = '',
    departmentId = '',
    description = '',
    classification = '',
    assigneeId = '',
    email = '',
    status = ''
  ) {}
}
