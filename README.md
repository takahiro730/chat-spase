## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|address|string|null: false|
|password|string|null: false|
|user_id|integer|null: false|

### Association
- hasmany_to :comments
- hasmany_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|group_memver|string|null: false|
|add_memver|string|null: false|
|group_id|integer|null: false|

### Association
- hasmany_users
_ hasmany_comments

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## commnetsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
|time|datetime|null: false|
|comment|text|null: false|