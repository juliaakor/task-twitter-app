export abstract class BaseRepository<T> {
  abstract findOne(id: string): Promise<T | null>;

  abstract update(id: string, data: Partial<T>): Promise<void>;
}
