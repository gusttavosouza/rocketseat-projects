import { ObjectId } from 'mongodb';

import INotificationsRepository from '@modules/Notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/Notifications/dtos/ICreateNotificationDTO';
import Notification from '@modules/Notifications/infra/typeorm/schemas/Notification';

class FakeNotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectId(), content, recipient_id });

    this.notifications.push(notification);

    return notification;
  }
}

export default FakeNotificationsRepository;
