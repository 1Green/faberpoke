import useSWR, { ConfigInterface, responseInterface } from "swr";

type Error = unknown;

export function useHttp<K extends readonly unknown[], D>(
  key: [...K] | (() => [...K] | null) | null,
  fn: (...args: [...K]) => D | Promise<D>,
  config?: ConfigInterface<D, Error>,
): responseInterface<D, Error>;

export function useHttp<K extends string, D>(
  key: K | (() => K | null) | null,
  fn: (arg: K) => D | Promise<D>,
  config?: ConfigInterface<D, Error>,
): responseInterface<D, Error>;

export function useHttp<K extends readonly unknown[], D>(
  key: [...K] | (() => [...K] | null) | null,
  fn: (...args: [...K]) => D | Promise<D>,
  config?: ConfigInterface<D, Error>,
): responseInterface<D, Error> {
  return useSWR(key, fn, config);
}
