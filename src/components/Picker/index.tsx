import React, {useCallback, useRef, useState} from 'react';
import {Animated} from 'react-native';

import {Container, Title, SelectField, Select, CardTitle} from './styles';

interface PickerProps {
  title: string;
  options: string[];
}

const Picker: React.FC<PickerProps> = ({options, title}) => {
  const scaleTitle = useRef(new Animated.Value(1)).current;
  const moveTitle = useRef(new Animated.Value(0)).current;
  const [optionSelected, setOptionSelected] = useState();
  const [isOpened, setIsOpended] = useState(false);

  const animatedField = useCallback((item: string) => {
    setIsOpended(item ? true : false);
    Animated.parallel([
      Animated.timing(scaleTitle, {
        toValue: item ? 0.8 : 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(moveTitle, {
        toValue: item ? 18 : 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Container>
      <CardTitle
        style={{
          translateY: moveTitle,
          transform: [{scale: scaleTitle}],
        }}>
        <Title isOpened={isOpened}>{title}</Title>
      </CardTitle>
      <SelectField isOpened={isOpened}>
        <Select
          mode="dropdown"
          selectedValue={optionSelected}
          onValueChange={(item) => {
            animatedField(item), setOptionSelected(item);
          }}>
          <Select.Item label="" value="" />
          {options.map((item) => (
            <Select.Item key={item} label={item} value={item} />
          ))}
        </Select>
      </SelectField>
    </Container>
  );
};

export default Picker;
