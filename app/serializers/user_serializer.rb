class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  # attributes :id, :username, :email, :password_digest
  # TODO: might not need password digest 
end
