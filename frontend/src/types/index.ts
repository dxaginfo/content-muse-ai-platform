// User types
export interface User {
  id: string;
  name: string;
  email: string;
  preferences?: UserPreferences;
  createdAt: string;
  updatedAt: string;
}

export interface UserPreferences {
  contentTypes: string[];
  industries: string[];
  targetAudience: string[];
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
}

// Content Idea types
export interface ContentIdea {
  id: string;
  title: string;
  description: string;
  contentType: 'blog' | 'video' | 'social';
  topics: string[];
  keywords: string[];
  scheduledFor?: string;
  status: 'draft' | 'scheduled' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface GenerateIdeaRequest {
  contentType: 'blog' | 'video' | 'social';
  topics?: string[];
  audience?: string[];
  tone?: string;
  count?: number;
}

// Calendar types
export interface CalendarEvent {
  id: string;
  title: string;
  ideaId: string;
  date: string;
  platform: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Trend Analysis types
export interface TrendData {
  topic: string;
  interest: number[];
  dates: string[];
  relatedTopics: string[];
  seasonality: 'rising' | 'falling' | 'stable';
}

export interface TrendRequest {
  topic: string;
  timeframe: 'week' | 'month' | 'quarter' | 'year';
}