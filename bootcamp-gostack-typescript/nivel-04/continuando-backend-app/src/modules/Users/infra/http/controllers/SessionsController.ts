import { container } from 'tsyringe';
import { Request, Response } from 'express';

import AuthenticateUserService from '@modules/Users/services/AuthenticateUserService';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    const { password: _, ...userWithoutPassword } = user;

    return response.json({ user: userWithoutPassword, token });
  }
}

export default SessionController;
