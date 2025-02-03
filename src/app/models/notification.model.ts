export interface Notification {
  id: number,
  userId : number,
  isRead: boolean,
  createdAt: string,
  type : NotificationType
  message : string,
}

export enum NotificationType {
  DEFAULT = 'DEFAULT',
  MESSAGE = 'MESSAGE',
  PROJECT = 'PROJECT'
}
