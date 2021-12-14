module XS
  ( Date
  , UUID
  , uuidv0
  , uuidv1
  , uuidv3
  , uuidv5
  , uuidv4
  , encrypt
  , decrypt
  ) where

import Prelude

import Unsafe.Coerce (unsafeCoerce)

foreign import data Date :: Type

foreign import data UUID :: Type

instance showUUID :: Show UUID where
  show = unsafeCoerce

foreign import uuidv0 :: UUID

foreign import uuidv1 :: Date -> UUID

foreign import uuidv3 :: UUID -> String -> UUID

foreign import uuidv4 :: UUID

foreign import uuidv5 :: UUID -> String -> UUID

foreign import encrypt :: UUID -> String  -> String

foreign import decrypt :: UUID -> String -> String
