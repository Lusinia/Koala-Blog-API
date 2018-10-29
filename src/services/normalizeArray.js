import { normalize, schema } from 'normalizr';


const normalizeArray = (data, idAttribute = 'id') => {
  const itemsSchema = new schema.Entity('items', undefined, { idAttribute });
  const normalized = normalize(data, [itemsSchema]);
  return { items: normalized.entities.items || {}, ids: normalized.result };
};

export default normalizeArray;
