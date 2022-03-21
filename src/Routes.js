import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// Block Components.
import { PageLoader } from '@/blocks'

// Utils.
import { RoutePaths } from '@/utils'

const BuyerModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/Buyer" */ './modules/Buyer')
)

const SellerModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/Seller" */ './modules/Seller')
)

const NotFoundModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/NotFound" */ './modules/NotFound')
)

const RoutesComponent = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={RoutePaths.Buyer} exact element={<BuyerModule />} />
        <Route path={RoutePaths.Seller} exact element={<SellerModule />} />
        <Route path="*" element={<NotFoundModule />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent
