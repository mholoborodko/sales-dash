import { faker } from '@faker-js/faker';
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  FloatingPortal,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FC, useEffect, useMemo, useState } from 'react';

import {
  NotificationItem,
  NotificationsSkeleton,
} from '@/entities/Notification';
import { useToggle } from '@/shared/hooks';
import { Icon, LoaderContainer } from '@/shared/ui';

import { NOTIFICATIONS_TITLES } from '../consts';

const notifications = Array.from({ length: 150 }).map(() => ({
  id: faker.string.uuid(),
  title: faker.helpers.arrayElement(NOTIFICATIONS_TITLES),
  message: faker.lorem.sentence(6),
  date: faker.date.recent({ days: 7 }).toISOString(),
  read: faker.datatype.boolean(),
}));

export const SidebarNotifications: FC = () => {
  const notificationToggle = useToggle(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (notificationToggle.value) {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [loading, notificationToggle.value]);

  const unreadCount = useMemo(
    () => notifications.filter(notification => !notification.read).length,
    []
  );

  const { refs, floatingStyles, context } = useFloating({
    placement: 'right-start',
    middleware: [offset(8), flip(), shift()],
    whileElementsMounted: autoUpdate,
    open: notificationToggle.value,
    onOpenChange: notificationToggle.set,
  });

  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);

  return (
    <div className="relative">
      <button
        ref={refs.setReference}
        className="relative p-2 rounded-lg"
        onClick={notificationToggle.toggle}
      >
        <Icon name="bell" size={20} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      <FloatingPortal>
        <AnimatePresence>
          {notificationToggle.value && (
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className="z-50"
            >
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="w-[26.25rem] bg-white rounded-xl shadow-lg border p-4"
                exit={{ opacity: 0, scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.9 }}
                style={{ transformOrigin: 'top right' }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              >
                <div className="flex items-end gap-2 mb-3">
                  <button onClick={notificationToggle.off}>
                    <Icon name="close" size={15} />
                  </button>
                  <h3 className="text-lg font-semibold">Notifications</h3>
                </div>

                <LoaderContainer
                  customLoader={<NotificationsSkeleton />}
                  isLoading={loading}
                  loaderClassName="mt-3"
                >
                  <div className="max-h-80 overflow-y-auto flex flex-col gap-2">
                    {notifications.map(notification => (
                      <motion.div
                        key={notification.id}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <NotificationItem {...notification} />
                      </motion.div>
                    ))}
                  </div>
                </LoaderContainer>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </div>
  );
};
