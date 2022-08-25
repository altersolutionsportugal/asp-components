import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '../components/Card'

const stories = storiesOf('Card', module)

stories.add('Default', () => <Card />)
