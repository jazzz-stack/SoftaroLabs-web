import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    emailSent: boolean;
  };
  errors?: string[];
}

export const contactApi = {
  // Submit contact form
  submitContact: async (formData: ContactFormData): Promise<ContactResponse> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/contacts`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }
      
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
      };
    }
  },

  // Get all contacts (admin only)
  getAllContacts: async (page = 1, limit = 10, status?: string, service?: string) => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });
      
      if (status) params.append('status', status);
      if (service) params.append('service', service);
      
      const response = await axios.get(`${API_BASE_URL}/contacts?${params}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }
      
      return {
        success: false,
        message: 'Failed to fetch contacts',
      };
    }
  },

  // Get contact by ID (admin only)
  getContactById: async (id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/contacts/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }
      
      return {
        success: false,
        message: 'Failed to fetch contact',
      };
    }
  },

  // Update contact status (admin only)
  updateContactStatus: async (id: string, status: string, respondedBy?: string, note?: string) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/contacts/${id}/status`, {
        status,
        respondedBy,
        note,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }
      
      return {
        success: false,
        message: 'Failed to update contact status',
      };
    }
  },

  // Get contact statistics (admin only)
  getContactStats: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/contacts/stats`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }
      
      return {
        success: false,
        message: 'Failed to fetch contact statistics',
      };
    }
  },
};