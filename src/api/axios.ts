import axios from 'axios';
import { API_BASE_URL } from '../constants/url';

class AxiosClient {
  #instance;
  #baseURL;

  constructor(baseURL: string) {
    this.#baseURL = baseURL;
    this.#instance = axios.create({
      baseURL: this.#baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.#setUpInterceptors();
  }

  #setUpInterceptors() {
    this.#instance.interceptors.response.use(
      response => response,
      (error: any) => {
        if (error.response) {
          return Promise.reject(error);
        } else if (error.request) {
          console.log('요청 전송 오류: 서버에 요청을 보낼 수 없습니다.');
        } else {
          console.log('요청 준비 오류: 요청을 처리하는 도중 오류가 발생했습니다.');
        }

        return Promise.reject(error);
      },
    );
  }

  async search(query: string) {
    try {
      const res = await this.#instance.get(`?q=${query}`);
      console.info('api');
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const httpClient = new AxiosClient(API_BASE_URL);
