import { User, UserRole } from "@prisma/client";

export class PermissionUtils {
	public static getRoleLevel(user: User): number {
		return [UserRole.Member, UserRole.Moderator, UserRole.Admin].indexOf(user.role);
	}
}
