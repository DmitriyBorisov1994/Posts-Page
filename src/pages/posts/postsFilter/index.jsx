import React from 'react'
import MySelect from '../../../components/UI/select/MySelect'
import MyInput from '../../../components/UI/input/MyInput';

const PostsFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder='Поиск'
        value={filter.query}
        onChange={event => setFilter({ ...filter, query: event.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Сортировка'
        options={[{ value: 'title', name: 'По названию' }, { value: 'body', name: 'По описанию' }]}
      />
    </div>
  )
}
export default PostsFilter