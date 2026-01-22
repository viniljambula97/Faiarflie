export interface WaitlistState {
  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
  message: string;
}

export enum WaitlistStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
