import React, { useContext, useEffect, useRef, useState } from 'react';
import { FlatList, Text } from 'react-native';

import { DbContext } from '../../contexts/db-context';
import { useServices } from '../../hooks/use-services';
import { Modal } from '../modal/modal';
import { Container } from './components/container.styled';
import { Header, HeaderField } from './components/header.styled';
import { Service } from './components/service.jsx/service';

export const ServicesList = ({ onEdit }) => {
  const { services, getServices, deleteService } = useServices();
  const { dbChanged } = useContext(DbContext);
  const [modalVisible, setModalVisible] = useState(false);
  const deleteServiceId = useRef();

  const handleCancel = () => setModalVisible(false);

  const handleDelete = (serviceId) => {
    deleteServiceId.current = serviceId;
    setModalVisible(true);
  };

  useEffect(() => {
    getServices({});
  }, [dbChanged]);

  const renderItem = ({ item }) => (
    <Service service={item} onEdit={onEdit} onDelete={handleDelete} />
  );

  return (
    <Container>
      <Modal
        visible={modalVisible}
        confirmText="Tak"
        cancelText="Nie"
        onCancel={handleCancel}
        onConfirm={() => {
          deleteService({ id: deleteServiceId.current });
          setModalVisible(false);
        }}
      >
        <Text>{`Czy na pewno usunąć usługę"`}</Text>
      </Modal>
      <Header>
        <HeaderField style={{ flexGrow: 1 }}>Nazwa</HeaderField>
        <HeaderField>Cena</HeaderField>
        <HeaderField style={{ flexBasis: 50, textAlign: 'right' }}>
          Usuń
        </HeaderField>
      </Header>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(service) => service.id}
        ad
      />
    </Container>
  );
};
