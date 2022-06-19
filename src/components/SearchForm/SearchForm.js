
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearching } from '../../redux/store';

const SearchForm = () => {
    const [newSearchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    console.log('newSearchString: ', newSearchString);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateSearching(newSearchString));
        setSearchString('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." value={newSearchString} onChange={e=>setSearchString(e.target.value)}/>
            <Button>
                <span className="fa fa-search"/>
            </Button>
        </form>
    );
  };

  export default SearchForm;