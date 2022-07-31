import { $axios } from '~/utils/api';

export const getCourses = (params) => {
  if ($axios)
    return $axios
      .get(`/courses`, { params })
      .then((response) => response)
      .catch((error) => error.response.data);
};

export const getCourse = (id) => {
  if ($axios)
    return $axios
      .get(`/courses/${id}`)
      .then((response) => response)
      .catch((error) => error.response.data);
};
