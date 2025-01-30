export interface Notification {
  id: number,
  userId : number,
  isRead: boolean,
  createdAt: Date,
  type : NotificationType
  message : string,
}

export enum NotificationType {
  DEFAULT = 'DEFAULT',
  MESSAGE = 'MESSAGE',
  PROJECT = 'PROJECT'
}
