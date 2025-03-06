
export interface DashboardProps {
  sackCount?: number;
  systemStatus?: 'Running' | 'Paused' | 'Error';
  targetDaily?: number;
  speedRate?: number;
}