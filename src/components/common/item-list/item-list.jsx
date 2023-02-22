import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';

import { DbContext } from '../../../contexts/db-context';
import { Modal } from '../modal/modal';
import { FullView } from '../full-view/full-view.styled';

export const ItemList = ({
  serviceHook,
  query,
  onEdit,
  headerComponent: HeaderComponent,
  itemComponent: ItemComponent,
}) => {
  const { items, getItems, deleteItem } = serviceHook(query);
  const { dbChanged } = useContext(DbContext);
  const [modalVisible, setModalVisible] = useState(false);
  const deleteItemId = useRef();

  const handleCancel = () => setModalVisible(false);

  const handleDelete = (itemId) => {
    deleteItemId.current = itemId;
    setModalVisible(true);
  };

  useEffect(() => {
    getItems(query);
  }, [dbChanged, query]);

  const renderItem = ({ item }) => (
    <ItemComponent item={item} onEdit={onEdit} onDelete={handleDelete} />
  );

  return (
    <FullView>
      <Modal
        visible={modalVisible}
        confirmText="Tak"
        cancelText="Nie"
        onCancel={handleCancel}
        onConfirm={() => {
          deleteItem({ id: deleteItemId.current });
          setModalVisible(false);
        }}
      >
        <Text>{'Czy na pewno usunąć?'}</Text>
      </Modal>
      <HeaderComponent />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(service) => service.id}
        ad
      />
    </FullView>
  );
};

ItemList.propTypes = {
  serviceHook: PropTypes.func.isRequired,
  query: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  itemComponent: PropTypes.func.isRequired,
  headerComponent: PropTypes.func,
  onPressHeader: PropTypes.func,
};

ItemList.defaultProps = {
  query: {},
  headerComponent: () => null,
  onPressHeader: () => {},
};
