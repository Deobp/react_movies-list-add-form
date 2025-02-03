import { useState } from 'react';
import { TextField } from '../TextField';

export type Movie = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

type Prop = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Prop> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    title: '',
    description: '',
    imgUrl: '',
    imdbUrl: '',
    imdbId: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(data);
    data.title = '';
    data.description = '';
    data.imgUrl = '';
    data.imdbUrl = '';
    data.imdbId = '';
    setCount(prev => prev + 1);
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={data.title}
        onChange={value => setData(prev => ({ ...prev, title: value }))}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={data.description}
        onChange={value => setData(prev => ({ ...prev, description: value }))}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={data.imgUrl}
        onChange={value => setData(prev => ({ ...prev, imgUrl: value }))}
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={data.imdbUrl}
        onChange={value => setData(prev => ({ ...prev, imdbUrl: value }))}
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={data.imdbId}
        onChange={value => setData(prev => ({ ...prev, imdbId: value }))}
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={
              !data.title || !data.imgUrl || !data.imdbUrl || !data.imdbId
            }
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
