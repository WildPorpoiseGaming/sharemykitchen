import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'

const HomePage = () => {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Hello App is an app to say hello' },
          { property: 'og:title', content: APP_NAME },
        ]}
      />
      <h3>Oven Type</h3>
      <form>
        <label>
          <input type="radio" name="stove" value="gas" />
        Gas Stove
      </label>
        <label>
          <input type="radio" name="stove" value="electric" />
      Electric Stove
    </label>
      <label>
        <input type="radio" name="oven" value="nopref" />
    No Preference
  </label>
      </form>
      <h3>Stove Type</h3>
      <form>
        <label>
          <input type="radio" name="oven" value="gas" />
        Gas Oven
      </label>
      <label>
        <input type="radio" name="oven" value="electric" />
      Electric Oven
    </label>
    <label>
      <input type="radio" name="oven" value="nopref" />
    No Preference
  </label>
      </form>
      <h3>Mixer Type</h3>
      <form>
        <label>
          <input type="radio" name="oven" value="kitchenaid" />
        Kitchen Aid Mixer
      </label>
      <label>
        <input type="radio" name="oven" value="other" />
      Other
    </label>
    <label>
      <input type="radio" name="oven" value="nopref" />
    No Preference
  </label>
      </form>
      <h3>Blender Type</h3>
      <form>
        <label>
          <input type="radio" name="oven" value="vitamix" />
        Vitamix
      </label>
        <label>
          <input type="radio" name="oven" value="other" />
      Other
    </label>
        <label>
          <input type="radio" name="oven" value="nopref" />
    No Preference
  </label>
      </form>
      <h3>Refrigerator Type</h3>
      <form>
        <label>
          <input type="radio" name="oven" value="stainless" />
        Stainless Steel
      </label>
      <label>
        <input type="radio" name="oven" value="deepfreeze" />
      Deep Freeze
    </label>
    <label>
      <input type="radio" name="oven" value="nopref" />
    No Preference
  </label>
      </form>
    </div>
  )
}

export default HomePage
