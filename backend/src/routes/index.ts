import { Router } from 'express';
import authRoutes from './auth.routes';
import ideaRoutes from './idea.routes';
import trendRoutes from './trend.routes';
import calendarRoutes from './calendar.routes';
import { authenticate } from '../middleware/authenticate';

const router = Router();

router.use('/auth', authRoutes);
router.use('/ideas', authenticate, ideaRoutes);
router.use('/trends', authenticate, trendRoutes);
router.use('/calendar', authenticate, calendarRoutes);

export default router;