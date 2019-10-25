json.array! @users do |user|
  json.id  @user.id
  json.user_name  @user.user.name
  json.content  @user.content
  json.data  @user.created_at.strftime('%Y/%m/%d %H:%M')
  json.image @user.image.url
end