export function getQueryParams(
  params: Record<string, string | undefined>,
) {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
}

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */

export function addQueryParams(
  params: Record<string, string | undefined>,
) {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  window.history.pushState(null, '', getQueryParams(params));
}
