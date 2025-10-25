import api from './api';

export interface Character {
  id: number;
  name: string;
  side: string;
  short_description: string;
  featured: boolean;
  films: string[];
  description?: any[];
}

export const CharacterService = {
  async getAll(): Promise<Character[]> {
    try {
      const res = await api.get('/characters');
      return res.data;
    } catch (error) {
      console.error('Failed to fetch characters:', error);
      throw new Error('Unable to fetch characters');
    }
  },

  async getById(id: string | number): Promise<Character> {
    try {
      const res = await api.get(`/characters/${id}`);
      return res.data;
    } catch (error) {
      console.error(`Failed to fetch character ${id}:`, error);
      throw new Error('Character not found');
    }
  },

  async getFeatured(): Promise<Character[]> {
    try {
      const res = await api.get('/characters/featured');
      return res.data;
    } catch (error) {
      console.error('Failed to fetch featured characters:', error);
      throw new Error('Unable to fetch featured characters');
    }
  },
};
