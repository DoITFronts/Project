import worker from '@/api/mocks/browser';

if (typeof window !== 'undefined') {
  worker.start();
}
