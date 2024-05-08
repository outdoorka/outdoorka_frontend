export interface ActivitiesState {
	items: any[];
	status: string | null;
	error: null | Error;
}

export interface RootState {
	activities: ActivitiesState;
}
