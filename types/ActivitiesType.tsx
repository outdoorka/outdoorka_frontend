import { AuthState } from "@/types/AuthType";
export interface ActivitiesState {
	items: any[];
	status: string | null;
	error: null | Error;
}

export interface RootState {
	activities: ActivitiesState;
	auth: AuthState;
}

export interface OrganizerState {
  _id: string;
  name: string;
  photo: string;
  rating: number;
}
export interface ActivityState {
  _id: string;
  organizer: OrganizerState;
  subtitle: string;
  region: string;
  city: string;
  activityImageUrls: string[];
  activityStartTime: string;
  activityEndTime: string;
  bookedCapacity: number;
  likers: number;
  popularity: number;
}
